import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Comment } from 'semantic-ui-react';
import { getComments } from '../../store/comment/comment';
import CommentBlock from '../CommentBlock/CommentBlock';
import './CommentList.css';
const CommentList = (props) => {
  const { commentList } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(props.stock));
  }, [dispatch, props.stock]);
  return (
    <div className="CommentList" data-testid="CommentList">
      <Comment.Group>
        {commentList
          .slice(0)
          .reverse()
          .map((comment) => (
            <CommentBlock
              id={comment.id}
              key={comment.id}
              author={comment.author}
              author_id={comment.author_id}
              time={comment.time}
              content={comment.content}
            />
          ))}
      </Comment.Group>
    </div>
  );
};

export default CommentList;
