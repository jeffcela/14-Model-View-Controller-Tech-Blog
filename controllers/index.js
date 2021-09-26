const router = required("express").Router();

const homeRoutes = required("./view/home");
const authRoutes = required("./view/auth");
const dashboardRoutes = required("./view/dashboard");
const blogRoutes = required("./view/blog");

router.use("/", homeRoutes);
router.use("/", authRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/", blogRoutes);

module.exports = router