try {
    throw new Error("Something went wrong");
} catch (error) {
    // error handling
    console.log("Error occured :"+ error.message);
};