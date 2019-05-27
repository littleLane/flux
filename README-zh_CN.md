# Flux
一套实现了单向数据流的应用程序架构模式。

<img src="./docs/img/flux-diagram-white-background.png" style="width: 100%;" />

## 入门

通过在 `Github` 上查看 [指南和例子](./examples) 入门。如果想查找更多的资源和 `API` 相关的文档可以查看 [facebook.github.io/flux](http://facebook.github.io/flux)。


## Flux 如何工作

关于 `Flux` 如何工作的更多信息可以查看 [Flux Concepts](./examples/flux-concepts) 作为引导，或者查看 [In Depth Overview](https://facebook.github.io/flux/docs/in-depth-overview.html#content) 相关内容。

## 要求
`Flux` 更像是一种模式而不是一个框架，它并且没有任何硬性的依赖。然而，我们常常利用 [EventEmitter](http://nodejs.org/api/events.html#events_class_events_eventemitter) 作为 `Store` 和 `Views` 的基础。`Dispatcher` 作为 Flux 的一部分，不是在任何地方都是容易获取的。此模块以及其他的一些应用程序都可以用于实现 Flux 模式的工具。

## 安装 Flux
`Flux` 是可以通过 [npm module](https://www.npmjs.org/package/flux) 进行获取的，所以你可以添加到 `package.json` 文件配置中或者通过运行 `npm install flux` 进行安装。可以通过 `Flux.Dispatcher` 获取 `dispatcher`，像下面这种方式进行引入：

```javascript
const Dispatcher = require('flux').Dispatcher;
```

查看 [dispatcher 相关的 API 和一些实例](http://facebook.github.io/flux/docs/dispatcher.html#content) 。

## Flux 工具

我们也提供了一些基础的工具类来帮助你入门 `Flux`。这些基础的工具类给 `Flux` 提供了坚实的基础，但是他们不是一个能够处理所有用例的功能完备的框架。如果这些用例程序无法满足您的需求，除此之外，还有许多其他优秀的 `Flux` 模式的框架。

```js
import {ReduceStore} from 'flux/utils';

class CounterStore extends ReduceStore<number> {
  getInitialState(): number {
    return 0;
  }

  reduce(state: number, action: Object): number {
    switch (action.type) {
      case 'increment':
        return state + 1;

      case 'square':
        return state * state;

      default:
        return state;
    }
  }
}
```

查看这个 [例子](./examples) 和 [文档](https://facebook.github.io/flux/docs/flux-utils.html) 获取更多的信息

## 从克隆的项目中构建 Flux
克隆这个项目并在控制台导向到 `flux` 目录。然后执行 `npm install` 。

在控制台执行 `npm run build` 命令，这个命令将自动运行基于[Gulp]（http://gulpjs.com/）的构建任务并生成 `Flux.js` 文件，然后您就可以将其作为模块进行导入了。

您可以像如下的形式引用 `Dispatcher`：

```javascript
const Dispatcher = require('path/to/this/directory/Flux').Dispatcher;
```

构建过程还在 `lib` 目录中生成 `Dispatcher` 和 `invariant` 模块的脱语法糖版本，您可以直接引用这些模块，将它们复制到最方便的目录中。 `flux-todomvc` 和 `flux-chat` 示例应用程序都这样做。

## 加入 Flux 社区
有关如何提供帮助，请参阅[CONTRIBUTING]（/ CONTRIBUTING.md）文件。

## 协议
`Flux` 是基于 `BSD 协议`的。 我们还会提供额外的专利授权。
