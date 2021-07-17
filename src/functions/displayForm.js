import '../Pages/Auth/auth.css';
export const displayForm = (arr, handleChange) =>
  arr.map((el) => (
    <div key={el.id} className='input-container'>
      <label htmlFor={el.id}>{el.name}</label>
      <input
        type={el.type}
        name={el.id}
        id={el.id}
        value={el.value}
        onChange={(e) => handleChange(el.id, e.target.value)}
      />
    </div>
  ));
