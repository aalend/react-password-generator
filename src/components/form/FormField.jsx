import styles from './FormField.module.css';

function FormField({ type, name, id, label, onInputCheck, isChecked }) {
  return (
    <div className={`${styles} flex-align`}>
      <input type={type} name={name} id={id} onChange={onInputCheck} checked={isChecked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default FormField;
