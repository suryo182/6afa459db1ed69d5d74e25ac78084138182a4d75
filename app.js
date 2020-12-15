const getHistory = (_) => {
  return document.querySelector('.history-value').innerText;
};

const printHistoryValue = (number) => {
  document.querySelector('.history-value').innerText = number;
};

const getOutput = (_) => {
  return document.querySelector('.output-value').innerText;
};

const printOutputValue = (number) => {
  if (number === '') {
    document.querySelector('.output-value').innerText = number;
  } else {
    document.querySelector('.output-value').innerText = formatNumber(number);
  }
};

const formatNumber = (number) => {
  if (number == '-') {
    return '';
  }
  const n = Number(number);
  const value = n.toLocaleString('en');
  return value;
};

const reverseNumberFormat = (number) => {
  return Number(number.replace(/,/g, ''));
};

const operator = document.querySelectorAll('.operator');

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    if (this.id == 'clear') {
      printHistoryValue('');
      printOutputValue('');
    } else if (this.id == 'backspace') {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutputValue(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output == '' && history != '') {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != '' || history != '') {
        output = output == '' ? output : reverseNumberFormat(output);
        history = history + output;
        if (this.id == '=') {
          let result = eval(history);
          printOutputValue(result);
          printHistoryValue('');
        } else {
          history = history + this.id;
          printHistoryValue(history);
          printOutputValue('');
        }
      }
    }
  });
}
const number = document.querySelectorAll('.number');

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      printOutputValue(output);
    }
  });
}
