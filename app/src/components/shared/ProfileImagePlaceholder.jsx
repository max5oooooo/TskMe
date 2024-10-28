const ProfileImagePlaceholder = ({ className, src, alt }) => {
    if (src) {
        return (
            <>
                <img src={src} alt={alt} className={className} />
            </>
        )
    }
    
    return (
        <div className="p-2 text-xs bg-slate-300 rounded-full flex justify-center items-center w-8 h-8">
            <i className="fa-regular fa-user text-slate-800"></i>
        </div>
    )
}

export default ProfileImagePlaceholder