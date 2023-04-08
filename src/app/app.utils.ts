export class utils {
	public static capitalize(name: string) {
		return name.replaceAll(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());
	}
	public static tokenize(name: string) {
		return name.replaceAll(/\s+/g, "-").toLowerCase();
	}
	public static detokenize(token: string) {
		return token.replaceAll("-", " ");
	}
}
