import { useEffect, useState } from 'react';
import { DuvidasData } from '../../interface/DuvidasData';
import "./modal.css";
import { useDuvidasDataMutate } from '../../hooks/useDuvidasDataMutate';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: unknown): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [isLoading] = useState(false);
    const { mutate, isSuccess } = useDuvidasDataMutate();

    const submit = () => {
        const duvidaData: DuvidasData = {
            title
        }
        mutate(duvidaData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [closeModal, isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Adicione uma nova duvida</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'adicionando duvida...' : 'adicionar'}
                </button>
            </div>
        </div>
    )
}