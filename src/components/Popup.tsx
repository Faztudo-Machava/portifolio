import { CheckCircle, X, XCircle } from "phosphor-react";
import  classNames from 'classnames';

interface PopupProps{
    isEmailSent?: boolean;
    show: boolean;
    closePopup: Function;
}

export function Popup(props: PopupProps) {
    return (
        <div id="top-right-modal" data-modal-placement="top-right" tabIndex={-1} className={classNames("overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-auto md:inset-0 h-modal md:h-full", {
            'animate-come-right hidden' : !props.show,
            'block' : props.show,
        })}>
            <div className="flex justify-end p-4 w-full h-full md:h-auto">
                <div className={classNames('dark:bg-gray-800 dark:bg-opacity-60 bg-opacity-60 bg-white border-t-4 rounded-b px-4 py-3 shadow-md',{
                    'border-green-500' : props.isEmailSent,
                    'border-red-500' : !props.isEmailSent,
                })} role="alert">
                    <div className={classNames('flex gap-3 items-center', {
                        'text-green-500 dark:text-green-500' : props.isEmailSent,
                        'text-red-500 dark:text-red-500' : !props.isEmailSent,
                    })}>
                        <div>
                            {props.isEmailSent ? <CheckCircle size={32} /> : <XCircle size={32}/>}
                        </div>
                        <div>
                            <p 
                                className={classNames('font-bold', {
                                'text-green-500 dark:text-green-500' : props.isEmailSent,
                                'text-red-500 dark:text-red-500' : !props.isEmailSent,
                            })}
                            >
                                Notificacao
                            </p>
                            <p 
                                className={classNames('text-sm', {
                                    'text-green-500 dark:text-green-500' : props.isEmailSent,
                                    'text-red-500 dark:text-red-500' : !props.isEmailSent,
                                })}
                            >
                                {props.isEmailSent ? 'Email enviado com sucesso' : 'Falha no envio de email'}
                            </p>
                        </div>
                        <div>
                            <button 
                                onClick={() => props.closePopup()} 
                                type="button" 
                                className="text-gray-400 
                                            bg-transparent 
                                            hover:text-gray-900 
                                            rounded-lg 
                                            text-sm p-1.5 
                                            ml-auto inline-flex 
                                            items-center 
                                            dark:hover:text-white" 
                                data-modal-toggle="popmodal">
                                <X size={32}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}