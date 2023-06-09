import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
const auth = getAuth(app);

const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();




    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;