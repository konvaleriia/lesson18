const submitButton = document.querySelector('#submitButton');
    const messageElement = document.querySelector('#message');

    submitButton.addEventListener('click', function() {
      const phoneNumber = document.querySelector('#phoneNumberInput').value;
      if (phoneNumber) {
        messageElement.textContent = `Дякуємо, наш менеджер зв'яжеться з Вами за номером ${phoneNumber}`;
      } else {
        messageElement.textContent = 'Введіть номер телефону.';
      }
    });