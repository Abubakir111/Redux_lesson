# Правила

- Организационные(обязательно)
    - Предупреждать, если не успеваете сдать дз во время по серьезным причинам
    - Если успеваете сдать до конца дня, когда будет проходить следующий урок, ваш код оценивается по 10 балльной системе, если не успеваете, по 5 балльной.
    - В телеграме писать каждый раз вашу группу и имя
- По коду
    - ```(обязательно)``` При выполнении домашнего задания использовать те технологии, которые мы проходили. То есть, например, на 3м уроке проходим просто Redux, значит в задании нужно использовать Redux.
    - ```(обязательно)``` Писать внятные сообщения коммитов, если сделал(а) задание 3 - `дз 3, создал todolist, store, редьюсер` (как пример), если поправил ошибку - 'исправил ошибку при добавлении заметки в редьюсере' и тд. Не слишком много, не слишком мало.
    - Стараться не использовать код с урока
    - Не использовать Material ui, Chakra ui и другие библиотеки, позволяющие быстро задать стили при помощи специальных компонентов. Так как это очень мешает проверке домашнего задания.
    - Давать внятные названия файлам, компонентам, функциям и тд. Если *список* пользователей - UserList а не User и тд
    - Писать комментарии в коде, хоть иногда, особенно когда пишется сложный код
    - Не выносить код в отдельный компонент, если это не подразумевается по заданию или если компонент соответствует принципу Single Responsibility, то есть выполняет только одну задачу.
        - Делать вот так не стоит:
            
            ```jsx
            const App = () => {
                return (
                       <UserList />
                )
            }
            ```
            
        
           Это касается  только домашних заданий, в настоящих проектах могут быть другие правила.
        
    - Ваш `.gitignore` должен быть в корневой папке, там же, где и папка node_modules, чтобы они не попадали на гитхаб. Перед коммитом можно использовать команду `git status` чтобы видеть какие файлы и папки попадут в коммит
    
          
    
- Рекомендации:
    - Использовать vite вместо create-react-app как более современное и быстрое решение, тем более его советует сама документация [React](https://react.dev/learn/start-a-new-react-project)
    - Использовать axios чаще. Эта библиотека удобнее чем window.fetch в разы.
    - Пользоваться css модулями и не писать стили в jsx.
