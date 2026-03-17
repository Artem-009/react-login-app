export default function Input({ labelText, inputId }) {
    return (
        <div className="input-group">
            <label htmlFor={inputId}>{labelText}</label>
            <input id={inputId} />
        </div>
    );
}
