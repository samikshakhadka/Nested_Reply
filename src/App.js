import React, { useState } from 'react';

function Comment({ comment }) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="p-4 border-t border-b border-gray-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.bhoos.com/images/logo.svg?w=128&q=100"
            alt="User Avatar"
          />
        </div>
        <div className="flex-grow">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-gray-800">{comment.text}</p>
          </div>
          {comment.replies && (
            <button
              className="text-gray-500 hover:text-gray-800 mt-2"
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? 'Hide replies' : 'Show replies'}
            </button>
          )}
        </div>
      </div>

      {showReplies && comment.replies && (
        <div className="ml-12 mt-4">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
}

function CommentSection() {
  const comments = [
    {
      id: 1,
      text: 'This is a comment.',
      replies: [
        {
          id: 2,
          text: 'This is a reply to the comment.',
          replies: [
            {
              id: 3,
              text: 'This is another reply.',
              replies: [
                {
                  id: 4,
                  text: 'This is a reply to the second reply.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      text: 'This is another comment.',
      replies: [
        {
          id: 6,
          text: 'This is a reply to the second comment.',
          replies: [
            {
              id: 7,
              text: 'This is another reply.',
              replies: [
                {
                  id: 8,
                  text: 'This is a reply to the second reply.',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentSection;
