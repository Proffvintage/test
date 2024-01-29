const byId = (id) => {
    return document.getElementById(id);
}
const $signUpButton = byId('signUp');
const $signinButton = byId('signIn');
const $container = byId('container');

$signUpButton.addEventListener('click', () => {
    $container.classList.add('right-panel-active');
});

$signinButton.addEventListener('click', () => {
    $container.classList.remove('right-panel-active');
});