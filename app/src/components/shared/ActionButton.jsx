const ActionButton = ({ children, onClick, className }) => {
  return (
    <>
        <div className={`flex gap-2 rounded-full border border-slate-100 shadow p-3 px-5 items-center cursor-pointer${className ? " " + className : ""}`} onClick={onClick}>
            {children}
        </div>
    </>
  )
}

export default ActionButton