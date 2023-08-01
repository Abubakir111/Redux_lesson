import { useDispatch, useSelector } from 'react-redux';
import { fethPosts } from './store/todoReducer';
import style from './AppStyle.module.css';
import { useEffect } from 'react';
import { fethCommit } from './store/todoReducer';

const App = () => {
  const posts = useSelector((state) => state.counter);
  const dispath = useDispatch();

  // Загрузка всех  постов
  useEffect(() => {
    dispath(fethPosts());
  }, []);

  // Загрузка комита  постов
  const hendelCommit = (id) => {
    dispath(fethCommit(id));
  };

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.post.id} className={style.container}>
            <h1 className={style.title}> {post.post.title}</h1>
            <div>{post.post.body}</div>
            <div>{post.post.id}</div>

            {/* Условный  рендеринг постов   */}
            {post.comments &&
              post.comments.map((comment) => (
                <div className={style.comitContiner}>
                  <div className={style.comitname} key={comment.id}>
                    <span className={style.p}>Имя:</span> {comment.name}
                  </div>
                  <div className={style.comitbody}>
                    <span className={style.span}>комментарий:</span>
                    {comment.body}
                  </div>
                </div>
              ))}

            <button onClick={() => hendelCommit(post.post.id)}>
              комментарий
            </button>
          </div>
        ))}
    </div>
  );
};

export default App;
