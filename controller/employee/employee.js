import { executeQuery } from '../../config/db';
const getAllEmployees = async (req,res) => {
    let employeeeData = await executeQuery('select * from employee',[]);
    res.send(employeeeData);
};

export { getAllEmployees };