
import { ScrollView } from "react-native"
import HeaderMain from "../../components/HeaderMain"
import BannerCarousel from "../../components/BannerCarousel"
import MainCategories from "../../components/MainCategories"
function index() {
    return (
        <ScrollView>
            <HeaderMain />
            <BannerCarousel />
            <MainCategories/>
        </ScrollView>

    )
}

export default index