import {InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    onChange?: (value: any) => void;
    label: string;
    columnClass?: string;
    id: string;
}

export const Input:  React.FC<InputProps> = ({
    onChange,
    label,
    columnClass,
    id,
    ...inputProps
}:InputProps) => {
    return (
        <div className={`field column ${columnClass}`}>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input 
                    style={{ backgroundColor: '#1E1E2F', color: '#FFF', border: '1px solid #3E3E55' }}
                    className="input" 
                    id={id}
                    {...inputProps}
                    onChange={ event => {
                            if(onChange){
                                onChange(event.target.value)
                            }
                        }
                    }
                    required 
                />
            </div>
    </div>
    )
}