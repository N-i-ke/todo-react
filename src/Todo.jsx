import './style.css';

export const Todo = () => {
  return (
    <>
      <div className='input-area'>
        <input placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          <li>
            <p>TODOです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p>TODOです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          <li>
            <p>TODOでした</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p>TODOでした</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Todo;