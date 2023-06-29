import * as create from './createElements';

export const renderPhoneBook = (app, title) => {
  const header = create.createHeader();
  const logo = create.createLogo(title);
  const main = create.createMain();
  const buttonGroup = create.createButtonsGroup([{
    className: 'btn btn-primary me-3 js-add',
    type: 'button',
    text: 'Добавить',
  },
  {
    className: 'btn btn-danger',
    type: 'button',
    text: 'Удалить',
  },
  ]);

  const imageLogo = create.createImage();
  const table = create.createTable();
  const {form, overlay} = create.createForm();
  const footer = create.createFooter();
  const h2 = create.createH2();
  footer.footerContainer.append(h2);
  header.headerContainer.append(imageLogo, logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

export const renderContacts = (elem, data) => {
  // Добавил
  elem.replaceChildren();
  const allRow = data ? data.map(create.createRow) : [];
  elem.append(...allRow);
  return allRow;
};

export const hoverRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
  });
  allRow.forEach(contact => {
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};
