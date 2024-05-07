const { pool } = require("../models/db");

// This function creates new role
const createNewRole = (req, res) => {
  const {role} = req.body;

  pool.query(`INSERT INTO roles (role) VALUES ($1) RETURNING *`,[role]).then((result)=>{
    res.status(201).json({
      success:true,
      message:"Role created sucessfully",
      role:result.rows,
    })
  }).catch((err)=>{
    res.status(500).json({
      success:false,
      message:"Server error",
    })
  })
};

// This function creates new permission
const createNewPermission = (req, res) => {
  /* permission s */
  const {permission} = req.body;

  pool.query(`INSERT INTO permissions (permission) VALUES ($1) RETURNING *`,[permission]).then((result)=>{
    res.status(201).json({
      success:true,
      message:"permission created sucessfully",
      role:result.rows,
    })
  }).catch((err)=>{
    res.status(500).json({
      success:false,
      message:"Server error",
    })
  })
};

// This function creates new role permission
const createNewRolePermission = (req, res) => {
  const {role_id,permission_id} = req.body;

  pool.query(`INSERT INTO role_permission (role_id,permission_id) VALUES ($1,$2) RETURNING *`,[role_id,permission_id]).then((result)=>{
    res.status(201).json({
      success:true,
      message:"Role Permission created sucessfully",
      role:result.rows,
    })
  }).catch((err)=>{
    res.status(500).json({
      success:false,
      message:"Server error",
    })
  })
};

module.exports = {
createNewRole,
createNewPermission,
createNewRolePermission
};
