import stor from './serviceStorage';
import * as create from './createElements';

const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };
  btnAdd.addEventListener('click', () => {
    openModal();
  });

  formOverlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === formOverlay || target.classList.contains('close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach((del) => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.del-icon')) {
      target.closest('.contact').remove();
      const targetName =
        target.closest('.contact').querySelector('td:nth-child(4)').textContent;
      stor.removeStorage(stor.phonebook, targetName);
    }
  });
};

const addContactPage = (contact, list) => {
  list.append(create.createRow(contact));
};

const addContactData = (contact) => {
  // data.push(contact);
  stor.setStorage(stor.phonebook, contact);
  console.log(contact);
};

const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);
    addContactPage(newContact, list);
    addContactData(newContact);
    form.reset();
    closeModal();
  });
};

export default {
  modalControl,
  deleteControl,
  addContactPage,
  formControl,
  addContactData,
};
