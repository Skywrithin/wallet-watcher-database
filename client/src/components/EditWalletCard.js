function EditWalletCard() {
    // const initialFormState = postObject ? {community: postObject.category.id , title: postObject.title, content: postObject.content } : null

    const formState = {
        user_id: "1",
        wallet_address: "0xda9dfa130df4de4673b89022ee50ff26f6ea73cf",
        alias: "Kaleb",
        is_favorite: true
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        // setFormState(formState => ({...formState, [name]: value}))
    }

    const confirmHandler = (e) => {
        e.preventDefault()

    }


    return (
        <div className="bg-white w-64 outline outline-4 outline-gray-600 rounded m-2">
            <form>
                <label>User</label>
                <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
                    type="text"
                    value={formState.user_id}
                    placeholder=" alias"
                    name="alias"
                    onChange={handleInput}
                />
                <label>Wallet Address:</label>
                <input className="m-2 mt-4 rounded bg-gray-100 drop-shadow"
                    type="text"
                    value={formState.wallet_address}
                    placeholder=" wallet"
                    name="wallet"
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

export default EditWalletCard