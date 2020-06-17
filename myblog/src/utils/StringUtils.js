export default class StringUtils {
    /**
     *
     * @param value
     * StringUtils.isEmpty(null) = true
     * StringUtils.isEmpty(undefined) = true
     * StringUtils.isEmpty('') = true
     * StringUtils.isEmpty(' bob ') = false
     * @returns true if value is empty or null
     */
    static isEmpty (value) {
       return value === undefined || value === null || value === '';
    }

    /**
     *
     * @param value
     * StringUtils.isEmpty(null) = true
     * StringUtils.isEmpty(undefined) = true
     * StringUtils.isEmpty('') = true
     * * StringUtils.isEmpty(' ') = true
     * StringUtils.isEmpty(' bob ') = false
     * @returns true if value is empty or null
     */
    static isBlank (value) {
        return this.isEmpty(value) || value.trim() === ' ';
    }
}
