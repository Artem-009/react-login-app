export default function Options({ checkboxText, forgotPasswordText }) {
    return (
        <div className="options">
            <label className="custom-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                {checkboxText}
            </label>

            <a href="https://google.com" onClick={(e) => e.preventDefault()}>{forgotPasswordText}</a>
        </div>
    )
}
