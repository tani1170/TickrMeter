import "./style.css";

// FAQ PRODUKT INFORMATION
document.addEventListener(
  "DOMContentLoaded",
  function () {
    const faqQuestions =
      document.querySelectorAll(
        ".faq-question"
      );

    faqQuestions.forEach(function (
      question
    ) {
      question.addEventListener(
        "click",
        function () {
          const answer =
            this.nextElementSibling;

          // Luk alle andre FAQ-svar
          const allAnswers =
            document.querySelectorAll(
              ".faq-answer"
            );
          allAnswers.forEach(function (
            ans
          ) {
            if (ans !== answer) {
              ans.style.display =
                "none";
              ans.classList.remove(
                "show"
              );
            }
          });

          if (
            answer.classList.contains(
              "show"
            )
          ) {
            answer.style.display =
              "none";
            answer.classList.remove(
              "show"
            );
          } else {
            answer.style.display =
              "block";
            answer.classList.add(
              "show"
            );
          }
        }
      );
    });
  }
);
