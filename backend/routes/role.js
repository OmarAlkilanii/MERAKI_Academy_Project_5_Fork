const express = require("express");
const { createNewRole, createNewRolePermission, createNewPermission } = require("../controllers/roles");

// Create roles router
const roleRouter = express.Router();

roleRouter.post("/",createNewRole);
roleRouter.post("/role_permission",createNewRolePermission);
roleRouter.post("/permission",createNewPermission);

module.exports = roleRouter;