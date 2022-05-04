import { useState } from "react";

export default function NewWalletCard({currentUser}) {

    const initialformState = {
        user_id: "",
        wallet_address: "",
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
        
    }

    const postNewWallet = () => {
        fetch( '/watched_whales',{
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
        <div className="bg-white w-64 outline outline-4 outline-gray-600 rounded m-2">
            <form>
                <div className="outline outline-4">New Wallet</div>
                
                <label>Wallet Address:</label>
                <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
                    type="text"
                    value={formState.wallet_address}
                    placeholder=" wallet_address"
                    name="wallet_address"
                    onChange={handleInput}
                />
                <label>Wallet Nickname:</label>
                <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
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