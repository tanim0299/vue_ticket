var app = Vue.createApp({

    data(){
        return{
            serial_no : 1,
            appliedCuppon : null,
            cupponCode : '',
            name : '',
            mobile : '',
            confirmed : false,
            cuppons : [
                {
                    cuppon_name : '100TAKAOFF',
                    discount : 100,
                },
                {
                    cuppon_name : '200TAKAOFF',
                    discount : 200,
                }
            ],
            seatHints : {
                sold : {
                    text : 'Sold',
                    color : 'red',
                    type : 'sold'
                },
                available : {
                    text : 'Available',
                    colr : 'white',
                    type : 'available'
                },
                booked : {
                    text : 'Booked',
                    color : 'gray',
                    type : 'booked'
                },
                slected : {
                    text : 'Selected',
                    color : 'green',
                    type : 'selected'
                }
            },

            seatBench : [
                {
                    name : 'A1',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'A2',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'A3',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'A4',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'B1',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'B2',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'B3',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'B4',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'C1',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'C2',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'C3',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'C4',
                    type : 'available',
                    price : 500,
                },
                {
                    name : 'D1',
                    type : 'available',
                    price : 400,
                },
                {
                    name : 'D2',
                    type : 'available',
                    price : 400,
                },
                {
                    name : 'D3',
                    type : 'available',
                    price : 400,
                },
                {
                    name : 'D4',
                    type : 'available',
                    price : 400,
                },
                {
                    name : 'E1',
                    type : 'available',
                    price : 300,
                },
                {
                    name : 'E2',
                    type : 'available',
                    price : 300,
                },
                {
                    name : 'E3',
                    type : 'available',
                    price : 300,
                },
                {
                    name : 'E4',
                    type : 'available',
                    price : 300,
                },
                {
                    name : 'F1',
                    type : 'available',
                    price : 300,
                },
                {
                    name : 'F2',
                    type : 'available',
                    price : 300,
                },
                {
                    name : 'F3',
                    type : 'available',
                    price : 300,
                },
                {
                    name : 'F4',
                    type : 'available',
                    price : 300,
                },
            ]
        };
    },

    computed : {
        slectedSeats()
        {
            let totalSelected = this.seatBench.filter(item => item.type === 'selected');
            return totalSelected;
        },

        totalCost()
        {
            let totalC = 0;
            this.slectedSeats.forEach((item) => {
                totalC += item.price;
            });

            if(this.appliedCuppon != null)
            {
                totalC = totalC - this.appliedCuppon.discount;
            }

            return totalC;
        }
    },
    
    methods : {
        seatCLick(i)
        {
            // console.log(i);
            let clickedSeats = this.seatBench[i];

            if(clickedSeats.type == 'sold' || clickedSeats.type == 'booked')
            {
                alert('You Cannot Buy This One');
                return;
            }

            if(clickedSeats.type == 'available' && this.slectedSeats.length == 4)
            {
                alert('You Have Reached Your Limit');
                return;
            }

            clickedSeats.type = 

            clickedSeats.type === 'selected' ? 'available' : 'selected';

        },

        confirm()
        {
            if(!this.name || !this.mobile)
            {
                alert('Please Give This Info');
                return;
            }

            this.confirmed = true;
            return;
        },

        reset()
        {
            this.appliedCuppon = null;
            this.name = '';
            this.mobile = '';
            this.cupponCode = '';
            this.confirmed = false;
            this.seatBench.forEach((item) => {
                if(item.type === 'selected')
                {
                    item.type = 'sold';
                }
            });
        }
    },

    watch : {
        cupponCode(newValue)
        {
            if(newValue.length == 10)
            {
                let searchedCuppon = this.cuppons.filter(item => item.cuppon_name === newValue);

                if(searchedCuppon.length == 1)
                {
                    this.appliedCuppon = searchedCuppon[0];
                }
            }
        },

        mobile(newValue,oldValue)
        {
            if(isNaN(newValue))
            {
                this.mobile = oldValue;
            }

            if(newValue.length == 12)
            {
                this.mobile = oldValue;
            }

            return;
        }
    }

}).mount('#app');