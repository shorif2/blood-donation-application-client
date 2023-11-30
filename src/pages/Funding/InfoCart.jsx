
// eslint-disable-next-line react/prop-types
const InfoCart = ({personInfo}) => {

  const {email, name, date, Amount, transactionId} =personInfo || ''
    return (
        <tbody>
            {/* row 1 */}
            <tr>

                <td>{name}</td>
                <td>{email}</td>
                <td>{transactionId}</td>
                <td>{date}</td>
                <td>${Amount}</td>

            </tr>
            
        </tbody>
    );
};

export default InfoCart;