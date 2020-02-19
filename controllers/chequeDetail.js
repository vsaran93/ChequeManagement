const chequeDetail = require('../models/chequeDetail');

const addCheckDetail = (req, res) => {
    const { AccountName, Address, ChequeNo, IssuedDate, Amount, ChequeDate, IsReceived } = req.body;
    if (!AccountName || !ChequeNo || !ChequeDate || !IssuedDate) {
        return res.status(400).json({
            success: false,
            message: "Bad Request"
        });
    }
    chequeDetail.findOne({ where: { ChequeNo: ChequeNo } }).then(chequeStatus => {
        if (!chequeStatus) {
            chequeDetail.create({
                AccountHolderName: AccountName,
                Address: Address,
                ChequeNo: ChequeNo,
                IssuedDate: IssuedDate,
                ChequeDate: ChequeDate,
                Amount: Amount,
                IsReceived: IsReceived,
            }).then((result) => {
                res.status(200).json({
                    success: true,
                    message: 'inserted successfully',
                    ChequeDetailId: result.ChequeDetailId
                })

            }).catch(err => {
                return res.status(500).json({
                    success: false,
                    ErrorDetails: err
                })
            })
        }
        return res.status(403).json({
            message: 'cheque detail already found'
        })
    }).catch(err => {
        return res.status(500).json({
            success: false,
            ErrorDetails: err
        })
    })

};

module.exports = {
    addCheckDetail
}