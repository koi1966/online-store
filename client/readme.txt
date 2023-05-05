npx create-react-app .   // создать проект

npm i axios react-router-dom mobx mobx-react-lite
1.15

111

///  https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

Я также столкнулся с той же проблемой, и я так много искал в Интернете, но я не получил ответа по своему вопросу.

Поэтому я удалил версию 6 react-router-dom:

npm uninstall react-router-dom
И установил версию 5.2.0 react-router-dom:

npm install react-router-dom@5.2.0

