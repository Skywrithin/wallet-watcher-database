import { useState } from "react";

export default function NewWalletCard({currentUser}) {

    const initialformState = {
        wallet_address: 0,
        alias: "",
        is_favorite: false
    }

    const [formState, setFormState] = useState(initialformState)

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormState(formState => ({...formState, [name]: value}))
    }
    const confirmHandler = (e) => {
        e.preventDefault()
        postNewWallet()
        
    }

    const postNewWallet = () => {
        fetch( '/custom_wallets',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                wallet_address: formState.wallet_address,
                alias: formState.alias
            }),
        }).then((r) => r.json()).then((data) => {
            console.log(data)
        })
    }


    return (
        <div className="bg-white w-64 outline outline-1 rounded m-4 ml-64 p-2">
            <form className="lm-64">
                <div className="outline outline-2 rounded">New Wallet</div>
                
                <label className="flex font-semibold m-1 mt-2">Wallet Address:</label>
                <input className="m-2 flex rounded bg-gray-100 drop-shadow"
                    type="text"
                    value={formState.wallet_address}
                    placeholder=" wallet_address"
                    name="wallet_address"
                    onChange={handleInput}
                />
                <label className="flex font-semibold m-1 mt-2">Wallet Nickname:</label>
                <input className="m-2 rounded bg-gray-100 drop-shadow"
                    type="text"
                    value={formState.alias}
                    placeholder=" alias"
                    name="alias"
                    onChange={handleInput}
                />
                <div><button className="rounded outline outline-1 m-1" onClick={confirmHandler}>Confirm</button><button className="rounded outline outline-1 m-1">Cancel</button></div>
            </form>
        </div>
    )
}