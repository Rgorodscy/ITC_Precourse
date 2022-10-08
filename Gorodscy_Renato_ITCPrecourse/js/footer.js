const codingLanguages = ["HTML", "CSS"];
const sentenceElement = document.getElementById('buildSentence');
let partialSentenceCodes = "";

const buildSentence = function (codingLanguages) {
  if (codingLanguages.length == 1) {
    sentenceElement.innerHTML = `This website has been created with: ${codingLanguages[0]}.`;
  } else {
    for (let i = 0; i < codingLanguages.length - 2; i++) {
      partialSentenceCodes += codingLanguages[i] + ", ";
    }
    andCode = codingLanguages[codingLanguages.length - 2];
    lastCode = codingLanguages[codingLanguages.length - 1];
    sentenceElement.innerHTML = `This website has been created with: ${partialSentenceCodes} ${andCode} and ${lastCode}.`;
  }
}

buildSentence(codingLanguages)
