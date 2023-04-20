import * as util from '../src/libs/datastructures'

describe('Queue', () => {
  let queue: util.Queue<number>

  beforeEach(() => {
    queue = new util.Queue<number>()
  })

  it('should enqueue items', () => {
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.size).toBe(2)
  })

  it('should dequeue items', () => {
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.dequeue()).toBe(1)
    expect(queue.dequeue()).toBe(2)
  })

  it('should throw an error when dequeueing an empty queue', () => {
    expect(() => queue.dequeue()).toThrowError('Queue is empty')
  })

  it('should convert to an array', () => {
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.toArray()).toEqual([1, 2])
  })

  it('should be iterable', () => {
    queue.enqueue(1)
    queue.enqueue(2)

    const items = []
    for (const item of queue) {
      items.push(item)
    }

    expect(items).toEqual([1, 2])
  })
})
