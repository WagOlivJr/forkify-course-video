import View from './View';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded.';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHiddenWindow();
  }

  toggleWindow() {
    if (this._window.querySelector('.spinner')) return;
    const messageElement = this._window.querySelector('.message');
    if (messageElement) {
      this._overlay.classList.add('hidden');
      this._window.classList.add('hidden');
      // this._messageTimout &&
      clearTimeout(this._messageTimout);
      this._window.removeChild(messageElement);
      return;
    }
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
    // this._parentElement.classList.contains('hidden') &&
    this._parentElement.classList.remove('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    // this._btnOpen.addEventListener('click', () => {
    //   this.toggleWindow();
    // });
  }

  _addHandlerHiddenWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));

    // this._btnClose.addEventListener('click', () => {
    //   this._toggleWindow();
    // });

    // this._overlay.addEventListener('click', () => {
    //   this.toggleWindow();
    // });
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      this._parentElement.classList.add('hidden');
      const dataArr = [...new FormData(this._parentElement)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  concludeUpload(milliseconds, message = this._message) {
    // this._parentElement.classList.remove('hidden');
    this._btnClose.classList.remove('hidden');
    this._window.removeChild(this._window.querySelector('.spinner'));

    this._renderUploadMessage(message);
    this._messageTimout = setTimeout(() => {
      // if (this._overlay.classList.contains('hidden')) return;
      this._overlay.classList.add('hidden');
      this._window.classList.add('hidden');
    }, milliseconds);
  }

  _renderUploadMessage(message) {
    const markup = `
    <div class="message">
        <div>
            <svg>
            <use href="${icons}#icon-smile"></use>
            </svg>
        </div>
        <p>${message}</p>
    </div>
    `;
    this._window.insertAdjacentHTML('beforeend', markup);
  }

  // _generateMarkup() {}

  renderSpinner() {
    const markup = `
        <div class="spinner">
        <svg>
        <use href="${icons}#icon-loader"></use>
        </svg>
        <p style='font-size: 2em' >Uploading recipe...</p>
        </div>
        `;
    // this._clear();
    this._parentElement.classList.add('hidden');
    this._btnClose.classList.add('hidden');
    this._window.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new AddRecipeView();
