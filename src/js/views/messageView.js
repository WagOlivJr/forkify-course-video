// import View from './View';
// import icons from 'url:../../img/icons.svg';

// class messageView extends View {
//   _parentElement = document.querySelector('.upload');
//   _recipeFormClone;
//   _message = 'Recipe was successfully uploaded.';

//   _window = document.querySelector('.add-recipe-window');
//   _overlay = document.querySelector('.overlay');
//   _btnOpen = document.querySelector('.nav__btn--add-recipe');
//   _btnClose = document.querySelector('.btn--close-modal');

//   constructor() {
//     super();
//     this._addHandlerShowWindow();
//     this._addHandlerHiddenWindow();
//   }

//   toggleWindow() {
//     if (this._window.querySelector('.message')) {
//       this._overlay.classList.add('hidden');
//       this._window.classList.add('hidden');
//       this._messageTimout && clearTimeout(this._messageTimout);
//       this._window.removeChild(this._window.querySelector('.message'));
//       if (this._recipeFormClone) {
//         this._window.appendChild(this._recipeFormClone);
//         this._parentElement = this._recipeFormClone;
//         this._recipeFormClone = null;
//         return;
//       }
//     }
//     this._window.classList.toggle('hidden');
//     this._overlay.classList.toggle('hidden');
//     this._parentElement.classList.remove('hidden');
//   }

//   _addHandlerShowWindow() {
//     this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
//     // this._btnOpen.addEventListener('click', () => {
//     //   this.toggleWindow();
//     // });
//   }

//   _addHandlerHiddenWindow() {
//     this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
//     this._overlay.addEventListener('click', this.toggleWindow.bind(this));

//     // this._btnClose.addEventListener('click', () => {
//     //   this._toggleWindow();
//     // });

//     // this._overlay.addEventListener('click', () => {
//     //   this.toggleWindow();
//     // });
//   }

//   //   addHandlerUpload(handler) {
//   //     this._parentElement.addEventListener('submit', e => {
//   //       e.preventDefault();
//   //       this._parentElement.classList.add('hidden');
//   //       const dataArr = [...new FormData(this._parentElement)];
//   //       const data = Object.fromEntries(dataArr);
//   //       handler(data);
//   //     });
//   //   }
//   addHandlerUpload(handler) {
//     this._window.addEventListener('submit', e => {
//       const recipeForm = e.target.closest('.upload');
//       if (!recipeForm) return;

//       e.preventDefault();
//       this._parentElement.classList.add('hidden');
//       const dataArr = [...new FormData(this._parentElement)];
//       const data = Object.fromEntries(dataArr);
//       this._recipeFormClone = this._parentElement.cloneNode(true);
//       this._parentElement.remove();
//       handler(data);
//     });
//   }

//   concludeUpload(milliseconds, message = this._message) {
//     // this._parentElement.classList.add('hidden');
//     this._renderUploadMessage(message);
//     this._messageTimout = setTimeout(() => {
//       if (this._overlay.classList.contains('hidden')) return;
//       this._overlay.classList.add('hidden');
//       this._window.classList.add('hidden');
//     }, milliseconds);
//   }

//   _generateMarkup() {}

//   _renderUploadMessage(message) {
//     const markup = `
//     <div class="message">
//         <div>
//             <svg>
//             <use href="${icons}#icon-smile"></use>
//             </svg>
//         </div>
//         <p>${message}</p>
//     </div>
//     `;
//     this._window.insertAdjacentHTML('beforeend', markup);
//   }
// }

// export default new messageView();
