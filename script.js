const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You won!';
    }
    return 'The computer won!';
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.choice');
    const userChoiceElement = document.getElementById('user-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    const winnerElement = document.getElementById('winner');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const userChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
  
        // Update the UI
        userChoiceElement.querySelector('span').textContent = userChoice;
        computerChoiceElement.querySelector('span').textContent = computerChoice;
        winnerElement.querySelector('span').textContent = result;
      });
    });
  });
  