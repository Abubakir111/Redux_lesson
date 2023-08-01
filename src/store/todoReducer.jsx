import axios from 'axios';

export const getCommit = 'getCommit';
export const getPost = 'getPost';
const defaultState = [{ post: '' }];

let neState = [];
const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    // Записываю в state данные  полученные с  пост запрос
    case getPost:
      neState = action.payload.map((el) => {
        return { post: el };
      });
      return neState;
    case getCommit:
      // Получаю данные  комментарий  делаю  условия
      const newPostComit = state.map((el) => {
        if (el.post.id === action.payload[0].postId)
          return {
            post: el.post,
            comments: action.payload.map((el) => {
              return { name: el.user.username, body: el.body };
            }),
          };
        else return { post: el.post };
      });
      return newPostComit;
    default:
      return state;
  }
};
export default todoReducer;
// Пост  запрос
export const fethPosts = () => {
  return async (dispath) => {
    const responsePosts = await axios.get(
      ' https://dummyjson.com/posts?limit=10'
    );
    dispath({ type: getPost, payload: responsePosts.data.posts });
  };
};
//Запрос комментариев
export const fethCommit = (id) => {
  return async (dispath) => {
    const responseCommit = await axios.get(
      `https://dummyjson.com/comments/post/${id}`
    );
    dispath({ type: getCommit, payload: responseCommit.data.comments });
  };
};
