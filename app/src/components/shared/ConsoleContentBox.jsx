const ConsoleContentBox = ({ className, children }) => {
  return (
    <div className={`bg-white p-8 rounded-xl shadow my-6 ${className ? " " + className : " "}`}>
        {children}
    </div>
  )
}

export default ConsoleContentBox