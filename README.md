# private-lab
My sandbox for personal code experiments. Public, but not for general use.

## 利用方針
localhostで実験できないことをgitubpagesを使ってやる場所。

URL: https://tatesuke.github.io/private-lab/

積極的に広めないだけであって飽くまでpublicなリポジトリなのでクレデンシャル系はコミット禁止。

普段は`main`ブランチの最新を公開しておく。

```
git pull
git checkout main
npm install
npm run lint
npm run deploy
```

利用時は`main`ブランチからブランチを切り、そのブランチ上で作業をする。

```
git pull
git checkout main
git checkout -b yyyy-mmdd_topic
(作業)
git run deploy
```

書いたコードが使い捨てで残す意味もないと判断したらそのブランチはpushしないこと。