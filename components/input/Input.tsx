
interface InputProps {
  type: any,
  value: any,
  onChange?: void,
  name: String,
  id: String,
  placeholder: String,
  big?: boolean

}


const Input = ({ type, value, onChange, name, id, placeholder, big }: InputProps) => {
  return (

    <input type={type} value={value} onChange={onChange} name={name} id={id} placeholder={placeholder} className={
      `w-full 
     p-4 
     pt-6 
     font-light
     bg-white 
     border-2 
     outline-none
     text-center
     text-black 
     ${big ? 'w-[400px] pb-[6rem]' : ''}`
    }

    />


  );
}

export default Input;