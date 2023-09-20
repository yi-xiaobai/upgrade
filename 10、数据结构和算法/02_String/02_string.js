/**
设计一个支持以下两种操作的数据结构：
void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。
 */


const WordDictionary = function () {
    this.words = {}
}


WordDictionary.prototype.addWord = function (str) {
    if (this.words[str.length]) {
        this.words[str.length].push(str)
    } else {
        this.words[str.length] = [str]
    }
}


WordDictionary.prototype.search = function (str) {
    const len = str.length
    if (!this.words[len]) {
        return false
    }

    // 是字符串
    if (!str.includes(".")) {
        return this.words[len].includes(str)
    }

    const reg = new RegExp(str)
    return this.words[len].some(item => {
        return reg.test(item)
    })
}



const word = new WordDictionary()
word.addWord('bad')
word.addWord('dad')


console.log(word.search('ad')); // false
console.log(word.search('.ad'));// true
console.log(word.search('d..'));// true