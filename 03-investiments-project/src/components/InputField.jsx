export default function InputField({ label, onChange }) {
    return (
        <p>
            <label>{label}</label>
            <input type="number" required onChange={(event) => onChange('initialInvestment', event.target.value)}/>
        </p>
    );
}