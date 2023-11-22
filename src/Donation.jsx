import React from 'react';
import swal from 'sweetalert';

const Donation = () => {


    const handledonation = e => {
        e.preventDefault();
        const amount = e.target.amount.value;
        console.log(amount);

        if(amount>0){
            swal("Done!", "Thanks for your donation!", "success");
        }
        else{
            swal("Error!", "Please input valid amount", "error");
        }  
        
        e.target.amount.value="";
    }

    return (
        <div className="hero bg-base-200 my-10">
            <div className="hero-content">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handledonation} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="text-bold text-lg">Amount</span>
                        </label>
                            <input type="number" placeholder="Enter Amount" className="input input-bordered" name="amount" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500">Donate Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Donation;