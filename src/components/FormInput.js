export default function FormInput({
  name,
  onChange,
  placeholder,
  type,
  className,
}){

return (
  <input
    name={name}
    placeholder={placeholder}
    type={type}
    className={className}
    onChange={(e) =>
      onChange((state) => ({ ...state, [name]: e.target.value }))
    }
  />
);
}
