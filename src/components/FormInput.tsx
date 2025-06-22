type FormInputProps = {
    label: string;
    type: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({ label, type, id, value, onChange }: FormInputProps) => (
    <div className="row mb-3">
        <label htmlFor={id} className="col-sm-2 col-form-label text-light">{label}</label>
        <div className="col-sm-10">
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);

export default FormInput;
