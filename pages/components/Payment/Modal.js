import React, {useState} from "react";

export default function Modal(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [message,setMessage]=useState("Reservation");
    const [Name,setName]=useState("");
    const [NID,setNID]=useState("");
    const [Phone,setPhone]=useState("");
    return (
        <div>
            <button
                className="bg-green-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Reserve
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {props.message}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">

                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">

                                    <div className="mb-6 w-96">
                                        <label htmlFor="username-success"
                                               className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Your
                                            name</label>
                                        <input required={true} onChange={(e) => {
                                            setName(e.target.value);
                                            console.log(Name);
                                        }} type="text" id="username-success"
                                               className=" border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                                               placeholder="Bonnie Green"/>

                                    </div>
                                    </p>
                                    <div className={Name=="" ? "hidden" : "mb-6 w-96"}>
                                        <label htmlFor="username-success"
                                               className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">NID</label>
                                        <input required={true}  onChange={(e) => {
                                            setNID(e.target.value);
                                            console.log(NID);
                                        }} type="text" id="username-success"
                                               className=" border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                                               placeholder="XXXX-XXXX-XXXXXX-XXXXX"/>

                                    </div>
                                    <div className={(NID=="") ? "hidden" : "mb-6 w-96"}>
                                        <label htmlFor="username-success"
                                               className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Phone</label>
                                        <input required={true}  onChange={(e) => {
                                            setPhone(e.target.value);
                                            console.log(Phone)
                                        }} type="text" id="username-success"
                                               className=" border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                                               placeholder="+355 XXX XXX XX"/>

                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button className={Phone=="" ? "hidden" : "bg-red-900 flex group hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-400 hover:border-red-500 rounded"} onClick={(e) => {

                                       props.onClick(Name,NID,Phone);
                                        setMessage(props.message);
                                    }}
                                            >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            ) : null}
        </div>
    );
}