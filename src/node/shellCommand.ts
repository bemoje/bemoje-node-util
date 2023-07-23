import childProcess from 'child_process'

/**
 * Executes a shell command and returns a Promise that resolves with an object containing the command, stdout, and stderr.
 * The stdout and stderr are returned as arrays of strings, where each string represents a line of output.
 * If the command fails to execute, the Promise is rejected with an error.
 * @param command - The shell command to execute.
 * @returns A Promise that resolves with an object containing the command, stdout, and stderr.
 * @throws Will throw an error if the command fails to execute.
 * @example ```ts
 * shellCommand('ls -l').then(result => {
 *   console.log(result.cmd); // 'ls -l'
 *   console.log(result.stdout); // ['total 0', 'drwxr-xr-x  5 user  group  160 Jan 14 10:53 Documents', ...]
 *   console.log(result.stderr); // []
 * }).catch(error => {
 *   console.error(error);
 * });
 * ```
 */
export function shellCommand(command: string): Promise<{ cmd: string; stdout: string[]; stderr: string[] }> {
  return new Promise((resolve, reject) => {
    const child = childProcess.exec(command)
    const stdout: string[] = []
    const stderr: string[] = []

    child.stdout?.on('data', (data) => {
      const string = data.toString().trim()
      console.log(string)
      stdout.push(string)
    })

    child.stderr?.on('data', (data) => {
      const string = data.toString().trim()
      console.error(string)
      stderr.push(string)
    })

    child.on('error', (error) => {
      reject(error)
    })

    child.on('close', (code) => {
      const data = {
        cmd: command,
        stdout,
        stderr,
      }
      resolve(data)
    })
  })
}